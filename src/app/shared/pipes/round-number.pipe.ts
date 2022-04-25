import { Pipe, PipeTransform } from '@angular/core';

/*
 * Return value of round number
 * Usage:
 *   value | roundNumber
 * Example:
 *   {{ 20.45 | roundNumber }}
 *   formats to: 20
*/

@Pipe({ name: 'roundNumber' })
export class RoundNumberPipe implements PipeTransform {
  transform(value: number | null): number {
    return Math.round(value ?? 0);
  }
}

