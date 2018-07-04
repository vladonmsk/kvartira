
window.onload = function() {
    var wid = document.getElementById('width1');
    var heig = document.getElementById('height1');

    var p1w1 = wid.value;
    var p1h1 = heig.value;
    var datchik;
    var controls, mesh, renderer;
    var scene, camera;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var objects = [];
    var canvas = document.getElementById('canvas');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
    camera.position.z = 500;
    camera.position.y = 250;
    scene = new THREE.Scene();

    var light = new THREE.DirectionalLight(0xfff7e8, 1);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);

    //floor

    var geometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
    geometry.rotateX(-Math.PI / 2);
    for (var i = 0, l = geometry.vertices.length; i < l; i++) {
        var vertex = geometry.vertices[i];
        vertex.x += Math.random() * 20 - 10;
        vertex.y += Math.random() * 2;
        vertex.z += Math.random() * 20 - 10;
    }
    for (var i = 0, l = geometry.faces.length; i < l; i++) {
        var face = geometry.faces[i];
        face.vertexColors[0] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
        face.vertexColors[1] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
        face.vertexColors[2] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
    }
    material = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors});
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = -50;
    mesh.position.y = -50;
    scene.add(mesh);


    // object 1
    var geometry1 = new THREE.BoxGeometry(p1w1, 100, 10);
    var material = new THREE.MeshPhongMaterial({
        color: 0xA9A9A9,
        wireframe: false,
    });
    mesh = new THREE.Mesh(geometry1, material);
    mesh.position.x = p1w1/2 - 5;
    scene.add(mesh);
    objects.push(mesh);

    // object 2
    var geometry2 = new THREE.BoxGeometry(10, 100, p1h1);
    mesh = new THREE.Mesh(geometry2, material);
    mesh.position.z = p1h1/2 +10 - 5;
    scene.add(mesh);
    objects.push(mesh);

    //object 3
    var geometry3 = new THREE.BoxGeometry(p1w1, 100, 10);
    mesh = new THREE.Mesh(geometry3, material);
    mesh.position.x = p1w1/2 - 5;
    mesh.position.z = p1h1;
    scene.add(mesh);
    objects.push(mesh);

    //object 4
    var geometry4 = new THREE.BoxGeometry(10, 100, p1h1);
    mesh = new THREE.Mesh(geometry4, material);
    mesh.position.x = p1w1 - 10;
    mesh.position.z = p1h1/2;
    scene.add(mesh);
    objects.push(mesh);


    $('.datchik_position').on('click', function () {
        datchik = new THREE.BoxGeometry(20, 15, 20);
        mesh = new THREE.Mesh(datchik, material);
        mesh.position.x = 10;
        mesh.position.y = 30;
        mesh.position.z = p1h1/2;
        scene.add(mesh);
        objects.push(mesh);
    });

        /*var mesh = [];
        mesh[0] = new THREE.Mesh(geometry1, material);
        mesh[0].position.x = 150 - 5;
        mesh[1] = new THREE.Mesh(geometry2, material);
        mesh[1].position.z = 160 - 5;
        mesh[2] = new THREE.Mesh(geometry3, material);
        mesh[2].position.x = 150 - 5;
        mesh[2].position.z = 300;
        mesh[3] = new THREE.Mesh(geometry4, material);
        mesh[3].position.x = 300;
        mesh[3].position.z = 160 - 5;
        scene.add(mesh[0]);
        object.push(mesh[0]);
        scene.add(mesh[1]);
        object.push(mesh[1]);
        scene.add(mesh[2]);
        object.push(mesh[2]);
        scene.add(mesh[3]);
        object.push(mesh[3]);*/

        renderer = new THREE.WebGLRenderer({canvas:canvas});
        renderer.setClearColor(0x778899);
        renderer.setSize(width, height);

        controls = new THREE.TrackballControls(camera);
        var rendering = function () {
            requestAnimationFrame(rendering);
            controls.update();
            renderer.render(scene, camera);
        };
        rendering();

};
