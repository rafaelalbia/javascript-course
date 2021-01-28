const movie = {
    title: "Godzilla vs King Kong",
    year: 2021,
    style: "Scientific Fiction"
}

showProperties(movie);

function showProperties(object) {
    for (let index in object) {
        if (typeof object[index] == "string") {
            console.log(index, object[index]);
        }
    }
}
 