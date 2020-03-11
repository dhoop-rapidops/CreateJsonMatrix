function mapdata() {

    let nodes = [];
    let edges = [];

    // Write your logic here...
    let n = 3;

    createNodesAndEdges(edges, n);

    elements = {
        nodes,
        edges
    };

    return elements;

}


const createNodesAndEdges = (edges, n) => {
    // { "data": { "id":  "0-0E",  "source":  "N0-0",  "target":  "N0-1" } }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            nodes.push({ data: { id: `N${i}-${j}` } });

            if (j < n - 1) {
                edges.push({
                    data: {
                        id: `${i}-${j}E`,
                        source: `N${i}-${j}`,
                        target: `N${i}-${j + 1}`
                    }
                });
                edges.push({
                    data: {
                        id: `${i}-${j + 1}W`,
                        source: `N${i}-${j + 1}`,
                        target: `N${i}-${j}`
                    }
                });
                edges.push({
                    data: {
                        id: `${j}-${i}S`,
                        source: `N${j}-${i}`,
                        target: `N${j + 1}-${i}`
                    }
                });
                edges.push({
                    data: {
                        id: `${j + 1}-${i}N`,
                        source: `N${j + 1}-${i}`,
                        target: `N${j}-${i}`
                    }
                });
            }

            // making cross
            if (i < n - 1 && j < n - 1) {
                edges.push({
                    data: {
                        id: `${i}-${j}S-E`,
                        source: `N${i}-${j}`,
                        target: `N${i + 1}-${j + 1}`
                    }
                });
                edges.push({
                    data: {
                        id: `${i + 1}-${j + 1}S-E`,
                        source: `N${i + 1}-${j + 1}`,
                        target: `N${i}-${j}`
                    }
                });
            }
            if (j > 0 && i < n - 1) {
                edges.push({
                    data: {
                        id: `${i}-${j}W-S`,
                        source: `N${i}-${j}`,
                        target: `N${i + 1}-${j - 1}`
                    }
                });
                edges.push({
                    data: {
                        id: `${i + 1}-${j - 1}W-S`,
                        source: `N${i + 1}-${j - 1}`,
                        target: `N${i}-${j}`
                    }
                });
            }
        }
    }

}

module.exports.mapdata = mapdata;