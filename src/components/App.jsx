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
  };
  onSubmitForm = search => {
    this.setState({
      search,
      images: [],
      page: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=38330111-6d0efda7f4a8d995231e14698&image_type=photo&orientation=horizontal&per_page=20`
      )
        .then(respons => respons.json())
        .then(data =>
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }))
        )
        .finally(() => this.setState({ loading: false }));
    }
  }
  onClickButtonLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        {/* <Modal /> */}
        <Searchbar onSubmit={this.onSubmitForm} />
        {this.state.images.length !== 0 && (
          <>
            <ImageGallery>
              <ImageGalleryItem collection={this.state.images} />
            </ImageGallery>

            <Button onClick={this.onClickButtonLoad} />
          </>
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
