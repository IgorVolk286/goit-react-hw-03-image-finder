import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { ThreeCircles } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    search: ' ',
    images: [],
    page: 1,
    loading: false,
    show: false,
    id: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=38330111-6d0efda7f4a8d995231e14698&image_type=photo&orientation=horizontal&per_page=100`
      )
        .then(respons => respons.json())
        .then(data =>
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            totalHits: data.totalHits,
          }))
        )
        .catch(error => console.log(`error`))
        .finally(() => this.setState({ loading: false }));
    }
  }
  onClickButtonLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onSubmitForm = search => {
    this.setState({
      search,
      images: [],
      page: 1,
      totalHits: 0,
    });
  };
  onClickItem = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  };
  getId = e => {
    this.setState({ id: e.target.id });
  };

  render() {
    const { show, images, totalHits, id } = this.state;
    return (
      <div>
        {show && <Modal onClickItem={this.onClickItem} />}
        <Searchbar onSubmit={this.onSubmitForm} />
        {images.length !== 0 && (
          <ImageGallery getId={this.getId}>
            <ImageGalleryItem
              collection={images}
              onClickItem={this.onClickItem}
            />
          </ImageGallery>
        )}
        {images.length !== 0 && totalHits !== images.length && (
          <Button onClick={this.onClickButtonLoad} />
        )}

        {this.state.loading && (
          <ThreeCircles
            height="300"
            width="300"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        )}
      </div>
    );
  }
}
