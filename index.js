const express = require('express');
var cors = require('cors')
const app = express();
const movies = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      director: 'Frank Darabont',
      releaseYear: 1994,
      rating: 9.3,
    },
    {
      id: 2,
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      director: 'Francis Ford Coppola',
      releaseYear: 1972,
      rating: 9.2,
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      director: 'Christopher Nolan',
      releaseYear: 2008,
      rating: 9.0,
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      director: 'Quentin Tarantino',
      releaseYear: 1994,
      rating: 8.9,
    },
    {
      id: 5,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      director: 'Christopher Nolan',
      releaseYear: 2010,
      rating: 8.7,
    },
    {
      id: 6,
      title: 'Fight Club',
      description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      director: 'David Fincher',
      releaseYear: 1999,
      rating: 8.8,
    },
    {
      id: 7,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      director: 'Peter Jackson',
      releaseYear: 2001,
      rating: 8.8,
    },
    {
      id: 8,
      title: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
      director: 'Robert Zemeckis',
      releaseYear: 1994,
      rating: 8.8,
    },
    {
      id: 9,
      title: 'The Matrix',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      director: 'The Wachowski Brothers',
      releaseYear: 1999,
      rating: 8.7,
    },
    {
      id: 10,
      title: 'Goodfellas',
      description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
      director: 'Martin Scorsese',
      releaseYear: 1990,
      rating: 8.7,
    },
    {
      id: 11,
      title: 'The Silence of the Lambs',
      description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
      director: 'Jonathan Demme',
      releaseYear: 1991,
      rating: 8.6,
    },
    {
      id: 12,
      title: 'Seven',
      description: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
      director: 'David Fincher',
      releaseYear: 1995,
      rating: 8.6,
    },
    {
      id: 13,
      title: 'Gone Girl',
      description: 'With his wife disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it suspected that he may not be innocent.',
      director: 'David Fincher',
      releaseYear: 2014,
      rating: 8.1,
    },
    {
      id: 14,
      title: 'The Departed',
      description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
      director: 'Martin Scorsese',
      releaseYear: 2006,
      rating: 8.5,
    },
    {
      id: 15,
      title: 'The Social Network',
      description: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.',
      director: 'David Fincher',
      releaseYear: 2010,
      rating: 7.7,
    },
    {
      id: 16,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      director: 'Christopher Nolan',
      releaseYear: 2014,
      rating: 8.6,
    },
    {
      id: 17,
      title: 'The Avengers',
      description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
      director: 'Joss Whedon',
      releaseYear: 2012,
      rating: 8.0,
    },
    {
      id: 18,
      title: 'The Lion King',
      description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
      director: 'Roger Allers, Rob Minkoff',
      releaseYear: 1994,
      rating: 8.5,
    },
    {
      id: 19,
      title: 'Inglourious Basterds',
      description: 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner\'s vengeful plans for the same.',
      director: 'Quentin Tarantino',
      releaseYear: 2009,
      rating: 8.3,
    }
]

app.use(cors())
// List all movies
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

// Get a specific movie by ID
app.get('/api/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find(movie => movie.id === id);
  
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/', function (req, res) {
    res.send('Please visit! React App');
  });