import { expect, test } from 'vitest';
import { calculateSteps } from '@/helpers/calculateSteps.js';

//testing purpose
test('Steps for {X: 2, Y:100, Z: 20} should be 20', () => {
    expect(calculateSteps(2, 100, 20).length).toBe(20)
})

//no solution 
test('Steps for {X: 35, Y:45, Z: 0} should be 0', () => {
    expect(calculateSteps(35, 45, 0).length).toBe(0)
})

test('Steps for {X: 1, Y:1, Z: 1} should be 1', () => {
    expect(calculateSteps(1, 1, 1).length).toBe(1)
})

test('Steps for {X: 2, Y:10, Z: 4} should be 4', () => {
    expect(calculateSteps(2, 10, 4).length).toBe(4)
})

test('Steps for {X: 2, Y:100, Z: 96} should be 4', () => {
    expect(calculateSteps(2, 100, 96).length).toBe(4)
})

test('Steps for {X: 3, Y:5, Z: 4} should be 6', () => {
    expect(calculateSteps(3, 5, 4).length).toBe(6)
})

test('Steps for {X: 2, Y:6, Z: 5} should be 0', () => {
    expect(calculateSteps(2, 6, 5).length).toBe(0)
})

test('Steps for {X: 2, Y:4, Z: 10} should be 0', () => {
    expect(calculateSteps(2, 4, 10).length).toBe(0)
})

test('Steps for {X: 0, Y:0, Z: 0} should be 0', () => {
    expect(calculateSteps(0, 0, 0).length).toBe(0)
})

test('Steps for {X: -1, Y:-1, Z: -1} should be 0', () => {
    expect(calculateSteps(-1, -1, -1).length).toBe(0)
})