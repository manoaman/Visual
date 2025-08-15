const canvas = document.getElementById('gl');
const gl = canvas.getContext('webgl');

// Vertex shader source
const vsSrc = `
  attribute vec2 aPos;
  void main() {
    gl_Position = vec4(aPos, 0.0, 1.0);
  }
`;

// Fragment shader source
const fsSrc = `
  precision mediump float;
  void main() {
    gl_FragColor = vec4(1.0, 0.6, 0.2, 1.0);
  }
`;

// Compile shader helper
function compileShader(type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader));
  }
  return shader;
}

// Create shaders
const vs = compileShader(gl.VERTEX_SHADER, vsSrc);
const fs = compileShader(gl.FRAGMENT_SHADER, fsSrc);

// Link program
const prog = gl.createProgram();
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.linkProgram(prog);
if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
  throw new Error(gl.getProgramInfoLog(prog));
}
gl.useProgram(prog);

// Vertex data for a triangle
const verts = new Float32Array([
  -0.5, -0.5,   // left
   0.0,  0.6,   // top
   0.5, -0.5    // right
]);

// Create buffer
const buf = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buf);
gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

// Link vertex data to shader attribute
const loc = gl.getAttribLocation(prog, 'aPos');
gl.enableVertexAttribArray(loc);
gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

// Resize & draw
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
}
window.addEventListener('resize', resize);
resize();

gl.clearColor(0.05, 0.07, 0.15, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.TRIANGLES, 0, 3);
