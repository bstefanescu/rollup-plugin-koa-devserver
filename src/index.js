import DevServer from 'koa-devserver';

let server;

function closeServerOnTermination(server) {
	['SIGINT', 'SIGTERM'].forEach((signal) => {
		process.on(signal, () => {
			server.stop();
			process.exit();
		})
	})
}

function devServer(options) {

	// release previous server instance if rollup is reloading configuration in watch mode
	let firstStart = true;
	if (server) {
		server.stop();
		firstStart = false;
	}

	server = new DevServer(options).start(true); // silent === true

	if (firstStart) {
		closeServerOnTermination(server);
	}

	let running = false;

	return {
		name: "devServer",
		buildEnd(err) {
			console.log(server.banner());
			if (!running) {
				running = true;
				server.open(); // open in browser if needed
			}

			if(err) {
				let error = Object.assign({}, err);
				error.summary = err.toString();
				error.stack = err.stack;
				server.setError(error);
			} else {
				server.setError(null);
			}
		}
	}
}

export default devServer;
