const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.PORT || 8083);


export function findCardsByDisabledStatuses(statuses, cards) {
  const reducedCards = statuses.reduce((acc, status) => {
    if (status.enabled) {
      delete acc[status.name];
    }

    return acc;
  }, { ...cards });

  return Object.values(reducedCards).flat()
}
