import React from "react";
import { Image, Linking, View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import starIcon from "../../assets/icons/star.png";

export default function RepositoryCard({ repository }) {
  /**
   * Handles with the click to link to repository
   */
  function handleLinkToRepository() {
    Linking.openURL(repository.url);
  }

  return (
    <View style={styles.repositoryCard}>
      <View style={styles.repositoryTitle}>
        <Text style={styles.title}>{repository.name}</Text>
        <View style={styles.repositoryStars}>
          <Image source={starIcon} style={ styles.starIcon }/>
          <Text style={styles.likes}>{repository.likes}</Text>
        </View>
      </View>

      <Text style={styles.owner}>Owner: {repository.owner}</Text>
      <Text style={styles.description}>{repository.description}</Text>

      <TouchableOpacity
        style={styles.checkRepoBox}
        onPress={handleLinkToRepository}
      >
        <Text style={styles.buttonText}>Check this repo</Text>
      </TouchableOpacity>
    </View>
  );
}
