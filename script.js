function drawViz(data) {
  const container = document.getElementById("viz-container");
  container.innerHTML = `
    <h2>Hello Looker Studio 👋</h2>
    <p>Rows received: ${data.tables.DEFAULT.length}</p>
  `;
}

dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });

