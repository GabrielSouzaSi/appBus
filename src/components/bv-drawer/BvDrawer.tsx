// COMPONENTS
import { View, TouchableOpacity, Linking } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import DefaultText from '../default-text';
import BvDrawerItem from '../bv-drawer-item';

// STYLES
import styles from './styles';

export default function BvDrawer(props: any) {
  const { navigation } = props;

  const onNavigate = (route: string) => () => {
    navigation.navigate(route);
  };

  const onLogout = () => {
    console.log('logout');
  };

  const onContact = () => {
    Linking.openURL('mailto:example@gmail.com?subject=Feedback');
  };

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.closeDrawer()}
        >
          <DefaultText style={styles.closeButtonText}>X</DefaultText>
        </TouchableOpacity>

        <DefaultText style={styles.headerTitle}>Menu</DefaultText>
      </View>

      <BvDrawerItem
        icon="bus"
        title="Ônibus"
        description="Visualize os ônibus em tempo real e suas rotas."
        action={onNavigate('Bus')}
      />

      <BvDrawerItem
        icon="map"
        title="Linhas"
        description="Veja onde e quando seu ônibus irá passar."
        action={onNavigate('Lines')}
      />

      <BvDrawerItem
        icon="calendar"
        title="Eventos"
        description="Fique por dentro dos eventos realizados pela prefeitura."
        action={onNavigate('Events')}
      />

      <BvDrawerItem
        icon="letter"
        title="Fale conosco"
        description="Sua opinião é muito importante para nós."
        style={{ marginBottom: 0 }}
        action={onContact}
      />

      <View style={styles.divider} />

      <BvDrawerItem icon="out" title="Sair" action={onLogout} />
    </DrawerContentScrollView>
  );
}
