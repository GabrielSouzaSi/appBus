// COMPONENTS
import { View } from 'react-native';
import PresentationTitle from '../../components/presentation-title';
import FeatureOptions from '../../components/feature-option';

// STYLES
import styles from './styles';

export default function Welcome({ navigation }: any) {
  const onNavigate = (screen: string) => () => {
    navigation.navigate(screen);
  };

  return (
    <View style={{ flex: 1 }}>
      <PresentationTitle
        firstLine="Olá Marcelo,"
        secondLine="bem vindo!"
        description="Selecione abaixo o que você deseja fazer:"
      />

      <View style={styles.body}>
        <FeatureOptions
          title="Ônibus"
          description="Visualize os ônibus e suas rotas."
          icon="bus"
          onPress={() => console.log('bus')}
        />

        <FeatureOptions
          title="Linhas"
          description="Veja onde e quando seu ônibus irá passar."
          icon="line"
          onPress={() => console.log('line')}
        />

        <FeatureOptions
          title="Eventos"
          description="Fique por dentro dos eventos realizados pela prefeitura."
          icon="event"
          onPress={() => console.log('event')}
        />
      </View>
    </View>
  );
}
