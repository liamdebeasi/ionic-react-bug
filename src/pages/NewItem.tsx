import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';

const NewItem: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>New Item</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => props.history.goBack()}>props.history.goBack()</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => props.history.push('/child')}>Go to Child Page</IonButton>
      </IonContent>
    </IonPage>
  );
};
export default NewItem;