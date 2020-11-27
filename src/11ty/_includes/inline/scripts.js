// load ga after HTML is loaded, but also all the external resources: images, styles
// micro-performance, only care about tracking users that actually stays after page is loaded
document.addEventListener(
	"load",
	(function (i, s, o, g, r, a, m) {
		i["GoogleAnalyticsObject"] = r;
		(i[r] =
			i[r] ||
			function () {
				(i[r].q = i[r].q || []).push(arguments);
			}),
			(i[r].l = 1 * new Date());
		(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m);
	})(window, document, "script", "/assets/js/analytics.js", "ga")
);

ga("create", "UA-131565495-1", "auto");
ga("send", "pageview");

// if ("serviceWorker" in navigator) {
// 	window.addEventListener("load", function () {
// 		navigator.serviceWorker.register("/service-worker.js");
// 	});
// }
