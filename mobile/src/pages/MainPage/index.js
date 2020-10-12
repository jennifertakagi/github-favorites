import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, StatusBar } from "react-native";
import RepositoryCard from "../../components/RepositoryCard";

import styles from "./styles";
import api from "../../services/api.js";

export default function MainPage() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/starred/jennifertakagi')
    .then(response => {
      const { data = {} } = response;
      setRepositories(data.repositories);
    })
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={repositories}
          keyExtractor={repository => String(repository.id)}
          renderItem={({ item: repository }) => (
            <RepositoryCard repository={repository} />
          )}
        />
      </SafeAreaView>
    </>
  );
}
