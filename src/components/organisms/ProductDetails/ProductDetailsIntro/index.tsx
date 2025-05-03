import {Image, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {ProductInterface} from '@src/interfaces/ProductInterface';
import tw from '@src/utils/tw';
import DefaultText from '@src/components/atoms/DefaultText';
import Gap from '@src/components/atoms/Gap';
import EnhancedImageViewing from 'react-native-image-viewing';

export default function ProductDetailsIntro({data}: {data: ProductInterface}) {
  const [showPhoto, setShowPhoto] = useState(false);
  const [photos, setPhotos] = useState<{uri: string}[]>([]);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  const {height, width} = useWindowDimensions();
  const carouselHeight = height / 2.8;

  return (
    <>
      <View style={tw`w-[${width}px] h-[${carouselHeight}px]`}>
        <Carousel
          loop={false}
          width={width}
          height={carouselHeight}
          autoPlay={false}
          data={data.images}
          renderItem={({index, item: img}) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                setPhotos(
                  data.images.map(uri => {
                    return {
                      uri,
                    };
                  }),
                );
                setPhotoIndex(index);
                setShowPhoto(true);
              }}>
              <Image
                source={{uri: img}}
                resizeMode="cover"
                style={tw`w-[${width}px] h-[${carouselHeight}px] bg-grey-400`}
              />
              <View
                style={tw`absolute right-3 bottom-2 bg-black bg-opacity-50 px-4 py-1 rounded-lg`}>
                <DefaultText
                  title={`${index + 1}/${data?.images?.length}`}
                  titleStyle={tw`text-white text-xs`}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={tw`px-3`}>
        <Gap height={10} />
        <DefaultText
          title={data.title}
          titleStyle={tw`font-sf-semibold text-lg`}
        />
        <Gap height={10} />
        <DefaultText title={data.description} titleStyle={tw`text-sm`} />
        <Gap height={5} />
        <DefaultText
          title={`${data.stock} in available stock.`}
          titleStyle={tw`text-sm`}
        />
      </View>
      <EnhancedImageViewing
        images={photos}
        imageIndex={photoIndex}
        visible={showPhoto}
        onRequestClose={() => setShowPhoto(false)}
      />
    </>
  );
}
