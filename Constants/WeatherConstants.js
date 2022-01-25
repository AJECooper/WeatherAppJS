const weatherKeys = {
    ThunderStorm: [200, 201, 202, 210, 211, 212, 230, 231, 232],
    Drizzle: [300, 301, 302, 310, 311, 312, 313, 314, 321],
    Rain: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
    Snow: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
    Clear: [800],
    Clouds: [801, 802, 803, 804]
}

const weatherConstants = [
    {
        codes: weatherKeys.ThunderStorm,
        description: "ThunderStorm",
        colour: "#8C5454",
        icon: "wi-thunderstorm"
    },
    {
        codes: weatherKeys.Drizzle,
        description: "Drizzle",
        colour: "#7DA4F1",
        icon: "wi-raindrops"
    },
    {
        codes: weatherKeys.Rain,
        description: "Rain",
        colour: "#135BE7",
        icon: "wi-rain"
    },
    {
        codes: weatherKeys.Snow,
        description: "Snow",
        colour: "#CCD0D8",
        icon: "wi-snow"
    },
    {
        codes: weatherKeys.Clear,
        description: "Sunny",
        colour: "#FAE315",
        icon: "wi-day-sunny"
    },
    {
        codes: weatherKeys.Clouds,
        description: "Cloudy",
        colour: "#888E99",
        icon: "wi-cloud"
    }
]

export { weatherKeys, weatherConstants } 