<route lang="yaml">
meta:
  layout: tabs
name: tab3
</route>

<script setup lang="ts">
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 3</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">
            Tab 3
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <ExploreContainer name="Tab 3 page" />
    </IonContent>
  </IonPage>
</template>
