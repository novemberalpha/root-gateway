export default function normalizePort(val) {
  let normalizedPort = parseInt(val, 10);
  if (Number.isNaN(normalizedPort)) {
    return val; // named pipe
  }

  if (normalizedPort >= 0) {
    return normalizedPort; //port number
  }
  return false;
}