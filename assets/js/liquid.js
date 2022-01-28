var innerText = document.getElementById("heading-part-02");

var text = new Blotter.Text("HEART ✶", {
    family: "PassionSansPDag-Regular",
    size: 75,
    fill: "black",
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 0,
    paddingBottom:0
});

let material = new Blotter.LiquidDistortMaterial();

material.uniforms.uVolatility.value = 0.04;
material.uniforms.uSpeed.value = 0.5;
material.uniforms.uSeed.value = 0.5;

let blotter = new Blotter(material, {
    texts: text
});

let scope = blotter.forText(text);
scope.appendTo(innerText);



