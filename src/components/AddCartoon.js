import React, { Component } from 'react';

class AddCartoon extends Component {
  addNewCartoon(e) {
  e.preventDefault();
  var cartoon =  {
    title: this.title.value,
    year: this.year.value,
    description: this.description.value,
    poster: this.poster.value,
  };
  console.log(cartoon);
  this.props.addCartoon(cartoon);

  //Ripulisco i value
  this.title.value="";
  this.year.value="";
  this.description.value="";
  this.poster.value="";
}

  render() {
    return (
      <form className="movie-form" onSubmit={(e) => this.addNewCartoon(e)}>
        <p>Add a Cartoon</p>
        <input ref={ ( input ) => this.title = input } type="text" placeholder="Title" />
        <input ref={ ( input ) => this.year = input } type="text" placeholder="Year" />
        <input ref={ ( input ) => this.poster = input } type="text" placeholder="Poster" />
        <textarea ref={ ( input ) => this.description = input} placeholder="Description">
        </textarea>
        <button type="submit">Add Cartoon</button>
      </form>
    );
  }
}

export default AddCartoon;
