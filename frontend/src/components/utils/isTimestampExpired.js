export const isTimestampExpired = (prev, now) => now.diff(prev, 'days') >= 1;
