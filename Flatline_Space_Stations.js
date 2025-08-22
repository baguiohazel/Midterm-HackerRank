//Source: https://www.hackerrank.com/challenges/flatland-space-stations/problem

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    // Sort the station positions
    c.sort((a, b) => a - b);

    let maxDistance = 0;

    // Consider the distance from the first city (0) to the first station
    const firstCityDistance = c[0];
    maxDistance = Math.max(firstCityDistance, maxDistance);

    // Consider distances between stations
    for (let i = 0; i < c.length - 1; i++) {
        const midCityDistance = Math.floor((c[i + 1] - c[i]) / 2);
        maxDistance = Math.max(midCityDistance, maxDistance);
    }

    // Consider the distance from the last station to the last city
    const lastCityDistance = (n - 1) - c[c.length - 1];
    maxDistance = Math.max(lastCityDistance, maxDistance);

    return maxDistance;
}
