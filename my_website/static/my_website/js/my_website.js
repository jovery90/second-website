// var w = window.innerWidth, h = window.innerHeight;
// window.onresize = function(){
//   var w = window.innerWidth, h = window.innerHeight;
//   camera.aspect = w / h;
//   camera.updateProjectionMatrix();
//   renderer.setSize( w, h );
// }
//
// cameraSpeed = .0003;
// lightSpeed = .001;
// tubularSegments = 1000;
// radialSegments = 3;
// tubeRadius = 2;
// ambientLight = 0x222222;
// lightColor = 0xffffff;
// lightIntensity = 1;
// lightDistance = 20;
// hs = 0; // Hue-Start
// he = 360; // Hue-End
//
// var renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector("canvas"),
//   antialias: true,
// });
// renderer.setSize(w, h);
//
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(60, w / h, .001, 1000);
//
// var starsGeometry = new THREE.Geometry();
// for(i=0; i<3000; i++){
// 	var star = new THREE.Vector3();
// 	star.x = THREE.Math.randFloatSpread(1500);
// 	star.y = THREE.Math.randFloatSpread(1500);
// 	star.z = THREE.Math.randFloatSpread(1500);
// 	starsGeometry.vertices.push(star);
// }
// var starsMaterial = new THREE.PointsMaterial({color: 0xffffff});
// var starField = new THREE.Points(starsGeometry,starsMaterial);
// scene.add(starField);
//
// for (i=0; i<p.length; i++) {
//   var x = p[i][0];
//   var y = p[i][2];
//   var z = p[i][1];
//   p[i] = new THREE.Vector3(x,y,z);
// }
// var path = new THREE.CatmullRomCurve3(p);
// var geometry = new THREE.TubeGeometry(path,tubularSegments,tubeRadius,radialSegments,true);
//
// hue = hs;
// hup = true;
// for(i=0; i<geometry.faces.length; i++){
//   hup==1?hue++:hue--;
//   hue==he?hup=false:(hue==hs)?hup=true:0;
//   geometry.faces[i].color = new THREE.Color("hsl("+hue+",100%,50%)");
// }
//
// var material = new THREE.MeshLambertMaterial({
//   side: THREE.BackSide,
//   vertexColors: THREE.FaceColors,
//   wireframe: true
// });
//
// var tube = new THREE.Mesh(geometry, material);
// scene.add(tube);
//
// var light = new THREE.PointLight(0xffffff, 1, 50);
// scene.add(light);
// var light2 = new THREE.AmbientLight(ambientLight);
// scene.add(light2);
//
// var l1 = new THREE.PointLight(lightColor, lightIntensity, lightDistance);
// scene.add(l1);
// var l2 = new THREE.PointLight(lightColor, lightIntensity, lightDistance);
// scene.add(l2);
// var l3 = new THREE.PointLight(lightColor, lightIntensity, lightDistance);
// scene.add(l3);
// var l4 = new THREE.PointLight(lightColor, lightIntensity, lightDistance);
// scene.add(l4);
// var l5 = new THREE.PointLight(lightColor, lightIntensity, lightDistance);
// scene.add(l5);
//
// var pct = 0;
// var pct2 = 0;
// function render(){
//   pct += cameraSpeed
//   pct2 += lightSpeed;
//   var pt1 = path.getPointAt(pct%1);
//   var pt2 = path.getPointAt((pct + .01)%1);
//   camera.position.set(pt1.x,pt1.y,pt1.z);
//   camera.lookAt(pt2);
//   light.position.set(pt2.x, pt2.y, pt2.z);
//
//   l1.position.set(path.getPointAt((pct2+.0)%1).x, path.getPointAt((pct2+.0)%1).y, path.getPointAt((pct2+.0)%1).z);
//   l2.position.set(path.getPointAt((pct2+.2)%1).x, path.getPointAt((pct2+.2)%1).y, path.getPointAt((pct2+.2)%1).z);
//   l3.position.set(path.getPointAt((pct2+.4)%1).x, path.getPointAt((pct2+.4)%1).y, path.getPointAt((pct2+.4)%1).z);
//   l4.position.set(path.getPointAt((pct2+.6)%1).x, path.getPointAt((pct2+.6)%1).y, path.getPointAt((pct2+.6)%1).z);
//   l5.position.set(path.getPointAt((pct2+.8)%1).x, path.getPointAt((pct2+.8)%1).y, path.getPointAt((pct2+.8)%1).z);
//
//   renderer.render(scene, camera);
//   requestAnimationFrame(render);
// }
// requestAnimationFrame(render);

//
//
//



/* Please ❤ this if you like it! */


(function($) { "use strict";

	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px",
		t.style.top = n.clientY + "px",
		e.style.left = n.clientX + "px",
		e.style.top = n.clientY + "px",
		i.style.left = n.clientX + "px",
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();


	//Switch light/dark

	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});

})(jQuery);
