/*
Problem: Car Fleet
Pattern: Monotonic Stack
Difficulty: Medium

Brute Force:
For each car, calculate the time it takes to reach the
target.

Compare cars based on their positions and arrival times.
A car behind another car forms a fleet if it catches up
to the car ahead before reaching the target.

Repeatedly merge cars that would arrive at the same time
or earlier than the car in front.

Time: O(n²)
Space: O(n)

Optimized:
First calculate the time required for every car to reach
the target.

Store each car as:
[position, time]

Sort the cars by position in descending order so that we
process them from the car closest to the target to the car
farthest away.

Use a stack to store the arrival time of each fleet.

For each car:

* If the stack is empty, it forms the first fleet.
* If its arrival time is greater than the fleet ahead,
  it cannot catch that fleet before reaching the target,
  so it forms a new fleet.
* If its arrival time is less than or equal to the fleet
  ahead, it catches that fleet and becomes part of it.

The stack therefore represents the arrival times of the
different car fleets.

Time: O(n log n)
Space: O(n)

Where:
n = number of cars
target = destination position
position = starting position of each car
speed = speed of each car
*/

function carFleet(target, position, speed) {
    const cars = [];

    for (let i = 0; i < position.length; i++) {
        const time = (target - position[i]) / speed[i];

        cars.push([position[i], time]);
    }

    cars.sort((a, b) => b[0] - a[0]);

    const stack = [];

    for (const [pos, time] of cars) {
        if (
            stack.length === 0 ||
            time > stack[stack.length - 1]
        ) {
            stack.push(time);
        }
    }

    return stack.length;
}

const target = 12, 
const position = [10,8,0,5,3], 
const speed = [2,4,1,1,3]