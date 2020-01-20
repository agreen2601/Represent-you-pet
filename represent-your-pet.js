const kitty = {
    name: "Kitty Baby",
    species: "cat",
    nicknames: ["kitty baby numba 1", "kitty babu", "the babu cat"],
    age: 10,
    herro: function () {
        window.alert('Kitty Baby hollering "herro-maraaang"')
    },
    sleep: function () {
        window.alert("(Kitty Baby snoring loudly)")
    },
    inTheWay: function () {
        window.alert("Kitty Baby standing direcly in your way as you cook")
    },
    favoriteToys: [],
    play: function (toy) {
        if (toy.includes ("mouse")) {
            this.favoriteToys.push(toy)
        }
    }
}

kitty.herro();
kitty.sleep();
kitty.inTheWay();

kitty.play("mouse");
kitty.play("ball");
kitty.play("toy mouse");
kitty.play("laser pointer")

console.log(kitty.favoriteToys);