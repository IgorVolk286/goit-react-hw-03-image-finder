import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ThreeCircles } from 'react-loader-spinner';
export class App extends Component {
  state = {
    search: ' ',
    images: [
      {
        id: 736877,
        pageURL:
          'https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/',
        type: 'photo',
        tags: 'tree, cat, pet',
        previewURL:
          'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/g0d0039e5e7ccffd243ec9dc95bb71655c8ccd1e155210d7417dad1b6986425d7bd8cca4bd40bf6e0fda6b06369446f0c_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/g4853cc27a5d4d2d0f7d5d3349c06073c9e28ba76412c808ac4dfd2c596496fb56930cdea74d7c00ca7e63e10d35cd3c61a5f91e99abcf234430d3e0d280deddb_1280.jpg',
        imageWidth: 1920,
        imageHeight: 1282,
        imageSize: 97150,
        views: 1396932,
        downloads: 738559,
        collections: 2504,
        likes: 3037,
        comments: 598,
        user_id: 909086,
        user: 'Bessi',
        userImageURL:
          'https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg',
      },
      {
        id: 2083492,
        pageURL:
          'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/',
        type: 'photo',
        tags: 'cat, young animal, kitten',
        previewURL:
          'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_150.jpg',
        previewWidth: 150,
        previewHeight: 91,
        webformatURL:
          'https://pixabay.com/get/ge376a5c0fe414636cef2adcd5397746eca22dbae9947a348bc5a1a99d9e992bd522dc38de48d9a054a6932ce6018f95669ed4d72b17faecd167b96e5f7c2a1fe_640.jpg',
        webformatWidth: 640,
        webformatHeight: 390,
        largeImageURL:
          'https://pixabay.com/get/g1792c7bd41e057b3353100e029ce3cefbee3503b97f6e235cce34ecf70f61fe5edbf261a5c9b33c45514dbebb7160da7fdb54f5c18de4cc8b52db953dd0d9897_1280.jpg',
        imageWidth: 4928,
        imageHeight: 3008,
        imageSize: 4130948,
        views: 1351061,
        downloads: 803537,
        collections: 2253,
        likes: 2528,
        comments: 394,
        user_id: 1777190,
        user: 'susannp4',
        userImageURL:
          'https://cdn.pixabay.com/user/2015/12/16/17-56-55-832_250x250.jpg',
      },
      {
        id: 3012515,
        pageURL:
          'https://pixabay.com/photos/lion-roar-africa-animal-wildcat-3012515/',
        type: 'photo',
        tags: 'lion, roar, africa',
        previewURL:
          'https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_150.jpg',
        previewWidth: 150,
        previewHeight: 95,
        webformatURL:
          'https://pixabay.com/get/g39dada307e0195c590daaac195334c3ef522f250c3e6930829481f351eebc6308cc19aaa9d81384d64bb8b2b219f731c7ad7ebab45cffe100b13b71f0d4dd2df_640.jpg',
        webformatWidth: 640,
        webformatHeight: 407,
        largeImageURL:
          'https://pixabay.com/get/ga639fcad3aa342ed90c935ff3a47b19b804fb625594a8911af5112661e10a4487a3e61bb4dc0d8bdd94966b0009098c52533e343e1dbb83ab0d6cdb8c54204aa_1280.jpg',
        imageWidth: 3306,
        imageHeight: 2103,
        imageSize: 1869137,
        views: 1185504,
        downloads: 818736,
        collections: 1721,
        likes: 2358,
        comments: 456,
        user_id: 1546275,
        user: 'SarahRichterArt',
        userImageURL:
          'https://cdn.pixabay.com/user/2016/04/25/20-19-38-614_250x250.jpg',
      },
      {
        id: 3106213,
        pageURL:
          'https://pixabay.com/photos/nature-wildlife-white-bengal-tiger-3106213/',
        type: 'photo',
        tags: 'nature, wildlife, white bengal tiger',
        previewURL:
          'https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213_150.jpg',
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
          'https://pixabay.com/get/g8781c5a06994fe455c0174125d322d2b44eb34a1fe9830b823dc66db1ffb0fae1af40b8c13f76e80681a903618f6f9ea74c1277971e6d199c084ff62cb411363_640.jpg',
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
          'https://pixabay.com/get/gd4b5b9383cc5dc88d674d431a91cfa22d984ce86459a0b4e9bac700cae82c69dd0e7c19d74cedb0af759b1529ab5bd4ca22b64e8163e4d0c5f7af9d95673c7f8_1280.jpg',
        imageWidth: 5472,
        imageHeight: 3648,
        imageSize: 4037947,
        views: 1605049,
        downloads: 1029527,
        collections: 1774,
        likes: 2245,
        comments: 294,
        user_id: 1546275,
        user: 'SarahRichterArt',
        userImageURL:
          'https://cdn.pixabay.com/user/2016/04/25/20-19-38-614_250x250.jpg',
      },
      {
        id: 2536662,
        pageURL:
          'https://pixabay.com/photos/cat-flower-kitten-stone-pet-2536662/',
        type: 'photo',
        tags: 'cat, flower background, flower',
        previewURL:
          'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_150.jpg',
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
          'https://pixabay.com/get/g3f73eccb5a6b544cfb8dcbeab755f4519bedec62f8160a68b2fc3de77235a141d477bf63ce510dd81e88db523cc9e2e96504ba7981dc366b78aa3d727bba33d0_640.jpg',
        webformatWidth: 640,
        webformatHeight: 425,
        largeImageURL:
          'https://pixabay.com/get/gca1e8d98f249d4bf0906ae56cab14249def25354195f95c58c1c3d8653c88ed23ff2dc05728c4425c29d925bd46a816e201fdea785cc6d8fac8d59194528b23f_1280.jpg',
        imageWidth: 4592,
        imageHeight: 3056,
        imageSize: 3178484,
        views: 1086630,
        downloads: 678304,
        collections: 1728,
        likes: 2119,
        comments: 366,
        user_id: 5987327,
        user: 'Dimhou',
        userImageURL:
          'https://cdn.pixabay.com/user/2021/03/13/05-49-15-380_250x250.jpeg',
      },
    ],
    page: 1,
  };

  submitForm = event => {
    event.preventDefault();

    this.setState({
      search: event.target.elements.search.value,
      page: 1,
      // images: [],
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.submitForm} />
        {this.state.images.length !== 0 && (
          <ImageGallery collection={this.state.images} />
        )}
        {this.state.images.length !== 0 && <Button />}

        {/* <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        /> */}
      </div>
    );
  }
}
