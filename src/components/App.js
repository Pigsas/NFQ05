import React from 'react';
import { connect } from 'react-redux';
import { toggleCards} from '../actions';
import { getMostPopularMovies, getMeniu, getMoviesByGenre, setHeartById, addToLog } from '../thunks';
import Card from './Card';
import Meniu from "./Meniu";
import { getImageUrl } from '../config';



class App extends React.Component {

  componentDidMount() {
    this.props.onGetMostPopularMovies();

    this.props.onGetMeniuItems();

    this.props.onAddLog('Aplikacija uzkrauta');
  }


  render() {
    return (
      <div className="container">
        <header>
          <ul className="meniu">
            {this.props.meniuItems.map((genre) => (
                <Meniu
                    key={genre.id}
                    id={genre.id}
                    name={genre.name}
                    onGetGenre={this.props.onGetMoviesByGenre}
                    toogle={genre.id === this.props.toogledGenre?'toogle':''}
                />

            ))}
          </ul>
          <button
            style={{ display: 'block', margin: '0 auto' }}
            onClick={() => this.props.onToggleCards(!this.props.showCards)}
          >
            Hide movies
          </button>
        </header>
        
        {this.props.showCards
          ? (
            <div className="cards">
              {!!(this.props.toogledGenre)?(
                  this.props.moviesByGenre.map((card) => (
                        <Card
                            key={card.id}
                            id={card.id}
                            backgroundImage={getImageUrl(card.backdrop_path)}
                            date={card.release_date}
                            rating={card.vote_average}
                            votes={card.vote_count}
                            description={card.overview}
                            title={card.original_title}
                            onToogleHeart={this.props.onSetHeartById}
                            heart={this.props.hearted.indexOf(card.id) === -1? (0):(1)}
                        />
                    ))
              ) : (
                  this.props.mostPopularMovies.map((card) => (
                        <Card
                            key={card.id}
                            id={card.id}
                            backgroundImage={getImageUrl(card.backdrop_path)}
                            date={card.release_date}
                            rating={card.vote_average}
                            votes={card.vote_count}
                            description={card.overview}
                            title={card.original_title}
                            onToogleHeart={this.props.onSetHeartById}
                            heart={this.props.hearted.indexOf(card.id) === -1? (0):(1)}
                        />
                    ))
              )}
            </div>
          )
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showCards: state.componentState.showCards,
  mostPopularMovies: state.cards.mostPopular,
  meniuItems: state.meniu.meniuItems,
  moviesByGenre: state.genre.moviesByGenre,
  toogledGenre: state.genre.toogledGenre,
  hearted: state.heart.hearted,
  logs: state.log.logs,
});
const mapDispatchToProps = (dispatch) => ({
  onToggleCards: (shouldShow) => dispatch(toggleCards(shouldShow)),
  onGetMostPopularMovies: () => dispatch(getMostPopularMovies()),
  onGetMeniuItems: () => dispatch(getMeniu()),
  onGetMoviesByGenre: (id) => dispatch(getMoviesByGenre(id)),
  onSetHeartById: (id) => dispatch(setHeartById(id)),
  onAddLog: (log) => dispatch(addToLog(log)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
