const matches = [
  {
    homeTeam: 'France',
    awayTeam: 'Croatia',
    score: '2:1',
    date: '18.01.2019'
  },
  {
    homeTeam: 'England',
    awayTeam: 'Spain',
    score: '3:1',
    date: '18.01.2019'
  },
  {
    homeTeam: 'Spain',
    awayTeam: 'Croatia',
    score: '0:0',
    date: '12.01.2019'
  },
  {
    homeTeam: 'France',
    awayTeam: 'England',
    score: '0:1',
    date: '12.01.2019'
  },
  {
    homeTeam: 'England',
    awayTeam: 'Croatia',
    score: null,
    date: '03.02.2019'
  },
  {
    homeTeam: 'Spain',
    awayTeam: 'France',
    score: null,
    date: '03.02.2019'
  }
];

const getRankings = games => {
  // ... your implementation

  //extracting individual teams
  let teams = [];
  games.map(game => {
    let contains = false;
    teams.forEach(el => {
      if (game.homeTeam == el.team) {
        contains = true;
      }
    });
    if (!contains) {
      teams.push({ team: game.homeTeam, points: 0 });
    }
    contains = false;
    teams.forEach(el => {
      if (game.awayTeam == el.team) {
        contains = true;
      }
    });
    if (!contains) {
      teams.push({ team: game.awayTeam, points: 0 });
    }
  });

  // adding points
  games.map(game => {
    if (!game.score) return;
    const score = game.score.split(':');
    let team1Score = Number(score[0]);
    let team2Score = Number(score[1]);
    if (team1Score > team2Score) {
      teams.map((team, i) => {
        if (team.team === game.homeTeam) {
          teams[i].points += 3;
        }
      });
    } else if (team1Score < team2Score) {
      teams.map((team, i) => {
        if (team.team === game.awayTeam) {
          teams[i].points += 3;
        }
      });
    } else {
      teams.map((team, i) => {
        if (team.team === game.awayTeam) {
          teams[i].points += 1;
        }
        if (team.team === game.homeTeam) {
          teams[i].points += 1;
        }
      });
    }
  });

  //sorting teams by points and name

  teams = teams.sort((a, b) => {
    if (a.points === b.points) {
      return a.team.localeCompare(b.team);
    }
    return b.points - a.points;
  });

  return teams;
};

const footbalRankings = getRankings(matches);
console.log(footbalRankings);
