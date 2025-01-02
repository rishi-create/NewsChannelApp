import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/3.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to News24</Text>
      <Text style={styles.subtitle}>Your Trusted News Source</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Article', { title: 'Breaking News', content: 'Detailed breaking news content.' })}>
          <Image source={require('./assets/logo image.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Breaking News</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Article', { title: 'Tech Update', content: 'Latest tech news content.' })}>
          <Image source={require('./assets/1.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Tech Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const ArticleScreen = ({ route }) => {
  const { title, content } = route.params;

  return (
    <View style={styles.articleContainer}>
      <Text style={styles.articleTitle}>{title}</Text>
      <Text style={styles.articleContent}>{content}</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Article" component={ArticleScreen} options={{ headerTitle: 'News Article' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  articleContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  articleTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleContent: {
    fontSize: 16,
    lineHeight: 24,
  },
});