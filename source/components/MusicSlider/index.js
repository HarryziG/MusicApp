import { useEffect, useState } from 'react';
import { Vibration } from 'react-native';
import Slider from '@react-native-community/slider';


export function MusicSlider({soundDuration, sound, endAlert}) {

  const [actualValueSound, setActualValueSound] = useState(0)

  useEffect(() => {
  if (sound) {
    sound.setOnPlaybackStatusUpdate((data) => {
      setActualValueSound(data.positionMillis)
    })
  if(soundDuration === actualValueSound && endAlert) {
    Vibration.vibrate(1*500);
  }
  }
}, [sound]);

  return (
    <Slider
      style={{ width: 350, height: 40 }}
      minimumValue={0}
      maximumValue={soundDuration || 0}
      minimumTrackTintColor="#0500FF"
      thumbTintColor="#FFFFFF"
      maximumTrackTintColor="#C4C4C4"
      value={actualValueSound || 0}
      onSlidingComplete={e => {
        sound.setPositionAsync(e);
      }}
    />
  )
}
