import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import useThemeContext from '../../hooks/useThemeContext';

function ItemDetail({ item }) {
  const { theme } = useThemeContext();

  return (
    item && (
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: theme.colors.background },
        ]}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollView,
            { backgroundColor: theme.colors.background },
          ]}>
          <View style={styles.titleContainer}>
            <Icon
              color={theme.colors.text}
              name={item.icon}
              style={styles.icon}
            />
            <Text style={[styles.title, { color: theme.colors.text }]}>
              {item.title}
            </Text>
          </View>
          <Text
            style={[styles.description, { color: theme.colors.text }]}>
            {item.shortDescription}
          </Text>

          <Text style={[styles.subtitle, { color: theme.colors.text }]}>
            Status
          </Text>
          <Text
            style={[styles.description, { color: theme.colors.text }]}>
            {item.status}
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.text }]}>
            Ship To
          </Text>
          <Text
            style={[styles.description, { color: theme.colors.text }]}>
            {item.shipTo}
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.text }]}>
            Order Total
          </Text>
          <Text
            style={[styles.description, { color: theme.colors.text }]}>
            {item.orderTotal}
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.text }]}>
            Order Date
          </Text>
          <Text
            style={[styles.description, { color: theme.colors.text }]}>
            {item.orderDate}
          </Text>
          <Text style={[styles.body, { color: theme.colors.text }]}>
            {item.longDescription}
          </Text>
        </ScrollView>
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 15,
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  icon: {
    fontSize: 28,
    paddingRight: 5,
  },
  title: {
    fontSize: 26,
  },
  subtitle: {
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    paddingBottom: 16,
    opacity: 0.7,
  },
  body: {
    fontSize: 16,
  },
});

export default ItemDetail;