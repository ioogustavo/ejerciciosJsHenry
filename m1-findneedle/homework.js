// <!-- Ejemplo -->
// needle: redux
// haystack: react-redux
// output: 5

// <!-- Ejemplo -->
// needle: puntual
// haystack: pinky
// output: -1

// Complejidad de tiempo: O(n*m) - Se declaran dos for
// Complejidad de espacio: 1, aunque se declaran dos variables, i y j, se deduce que es 1

function findNeedle(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      // No compara que coincide, rompe cuando no coincida, la clave es i que no avanza si el primer if no se activa, entonces siempre va a devoler la posición correcta.
      if (haystack[i + j] !== needle[j]) break;
      if (j + 1 === needle.length) return i;
    }
  }
  return -1;
}

function findNeedle2(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }
  return -1;
}

module.exports = {
  findNeedle,
  findNeedle2,
};
