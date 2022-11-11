/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  Image,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Card from '../component/Card';
import SmallCard from '../component/SmallCard';

const DATA = [
  {
    id: 1,
    title: 'Kebun Raya',
    subtitle: 'Baturaden',
    description:
      'Baturraden adalah sebuah kecamatan di Kabupaten Banyumas, Provinsi Jawa Tengah, Indonesia. Baturaden di kenal sebagai daerah yang sejuk karena berada di ketinggian 300 hingga 3428 m dpl. Kecamatan ini berjarak sekitar 7,5 Km dari Kota Purwokerto ke arah utara.',
    url: 'https://cdn0-production-images-kly.akamaized.net/icyy5lcPJOgxF8syp0khUhyPXI0=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1095870/original/046601900_1451309142-20151228-taman_bunga-baturaden-purwokerto.jpg',
  },
  {
    id: 2,
    title: 'Curug Kembar',
    subtitle: 'Baturaden',
    description:
      'Curug Kembar menjadi salah satu pioner wisata alam di Banyumas dengan sajian air terjun yang mempesona. Alam yang segar dengan air jernih dan dingin menjadi daya tarik wisata Curug Kembar Purwokerto. Jiwa serta pikiran yang penat akan fresh kembali setelah pulang dari obyek wisata air terjun Curug Kembar satu ini.',
    url: 'https://s.yimg.com/ny/api/res/1.2/TBV77UMU4Zazg9p8QLG0yw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/uu/api/res/1.2/SEVGAjWvOMuOiCSoGpsItg--~B/aD0zNzk7dz02NzM7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/id/liputan6_hosted_772/d25b5cb0e9a16f24f86b0f0b0291fe63',
  },
  {
    id: 3,
    title: 'Waduk Penjalin',
    subtitle: 'Paguyangan',
    url: 'http://assets.kompasiana.com/items/album/2020/03/13/fb-img-1584061912556-5e6ae716097f365cc676a632.jpg',
  },
  {
    id: 4,
    title: 'Waduk Penjalin',
    subtitle: 'Paguyangan',
    description:
      'Waduk Penjalin adalah sebuah waduk yang berada di Kecamatan Paguyangan, Kabupaten Brebes, Jawa Tengah, atau sekitar 12 Km dari Bumiayu. Penjalin dalam Bahasa Jawa berati rotan. Waduk ini dibangun tahun 1930an oleh pemerintah Hindia Belanda bersamaan dengan Waduk Malahayu. ',
    url: 'http://assets.kompasiana.com/items/album/2020/03/13/fb-img-1584061912556-5e6ae716097f365cc676a632.jpg',
  },
  {
    id: 5,
    title: 'Pantai Menganti',
    subtitle: 'Kebumen',
    description:
      'Pantai Menganti merupakan sebuah pantai yang berlokasi di Desa Karangduwur, Kecamatan Ayah, Kabupaten Kebumen, Jawa Tengah. Pantai ini merupakan salah satu pantai terindah di Jawa Tengah. Pasir pantainya yang berwarna putih serta terdapat panorama perbukitan juga tebing karst yang indah.',
    url: 'https://www.djkn.kemenkeu.go.id/files/images/2022/03/49.jpg',
  },
  {
    id: 6,
    title: 'Lembah Asri',
    subtitle: 'Serang',
    url: 'https://dinporapar.purbalinggakab.go.id/wp-content/uploads/2021/03/01EZKPRPQS8RAAVFHQW1RKPHP3-scaled.jpg',
  },
  {
    id: 7,
    title: 'Owabong',
    subtitle: 'Purbalingga',
    description:
      'Objek Wisata Air Bojongsari atau lebih dikenal sebagai Owabong adalah tempat wisata keluarga yang memiliki wahana permainan berupa kolam renang, arena gokart, waterboom dan wahana air lainnya. Terletak di desa Bojongsari, kecamatan Bojongsari Kabupaten Purbalingga provinsi Jawa Tengah.',
    url: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/07/09/2872029693.jpg',
  },
  {
    id: 9,
    title: 'Kaligua',
    subtitle: 'Pandansari',
    description:
      'Agrowisata Kaligua adalah kawasan wisata agro dataran tinggi yang terletak di Desa Pandansari, Kecamatan Paguyangan, Kabupaten Brebes, Jawa Tengah. Tepatnya di wilayah Brebes bagian selatan.',
    url: 'http://dinbudpar.brebeskab.go.id/wp-content/uploads/2020/04/kebun-teh-kaligua-5e0a8d777301e.jpg',
  },
];

const Home = () => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  const renderItem = ({item}) => (
    <SmallCard
      url={item.url}
      title={item.title}
      subtitle={item.subtitle}
      onPress={() => {
        navigation.navigate('Detail', {detail: item});
      }}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.userWrapper}>
          <Text style={styles.userText}>Halo, Admin!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../../assets/pante.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.itemWrapper}
          numColumns={3}
          style={styles.flatlist}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: 'rgba(231, 226, 226, 0.46)',
  },
  userWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  userText: {
    fontSize: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  contentWrapper: {
    // marginVertical: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: '20%',
    // flexWrap: 'wrap',
  },
  itemWrapper: {
    flexDirection: 'column',
  },
  flatlist: {
    marginTop: 20,
  },
});

export default Home;
