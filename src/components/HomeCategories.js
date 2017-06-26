import React, { Component } from 'react';
import { View, Text } from 'react-native';

import CardSection from './common/CardSection';
import styles from '../styles/CategoryContainer.style';
import categoryStyle from '../styles/Category.style';

class HomeCategories extends Component {
    render() {
      return (
        <View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, paddingBottom: 8 }}>
              Shop By Category
            </Text>
          </View>
          <View>
            <View style={styles.containerStyle}>
              <CardSection>
                <View>
                  <Text style={categoryStyle.TextStyle}>
                    Groceries & Staples
                  </Text>
                </View>
              </CardSection>
              <CardSection>
                <View>
                  <Text style={categoryStyle.TextStyle}>
                    Fruits & Vegetables
                  </Text>
                </View>
              </CardSection>
              <CardSection>
                <View>
                  <Text style={categoryStyle.TextStyle}>
                       Imported items
                  </Text>
                </View>
              </CardSection>
              </View>
              <View style={styles.containerStyle}>
              <CardSection>
                <View>
                  <Text style={categoryStyle.TextStyle}>
                    Breads & Eggs
                  </Text>
                </View>
              </CardSection>
              <CardSection>
                <View>
                  <Text style={categoryStyle.TextStyle}>
                  Meat
                  </Text>
                </View>
              </CardSection>
              <CardSection>
                <View>
                  <Text style={categoryStyle.TextStyle}>
                       Personal Care
                  </Text>
                </View>
              </CardSection>
              </View>
              <View style={styles.containerStyle}>
              <CardSection>
                <View>
                  <Text style={categoryStyle.TextStyle}>
                    Branded Food
                  </Text>
                </View>
              </CardSection>
              <CardSection>
                <View>
                  <Text style={categoryStyle.TextStyle}>
                    Beverages
                  </Text>
                </View>
              </CardSection>
              <CardSection>
                <View>
                  <Text style={categoryStyle.TextStyle}>
                       Household
                  </Text>
                </View>
              </CardSection>
              </View>

          </View>
        </View>
      );
    }
}

export default HomeCategories;
