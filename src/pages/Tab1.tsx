import { IonButton, IonContent, IonDatetime, IonHeader, IonItem, IonLabel, IonModal, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { format, parseISO } from "date-fns";

const Tab1: React.FC = () => {

  const [showDate, setshowDate] = useState({
    isOpen: false,
  });
  let [dateValue, setDateValue] = useState(format(new Date(), 'yyyy-MM-dd')+ 'T09:00:00.000Z');
 
  
  const dateChanged = (value: any) => {
    console.log("value: ", value);
    setDateValue = value;
  };
  const formattedString = format(parseISO(format(new Date(), "yyyy-MM-dd") + 'T09:00:00.000Z'),'HH:mm, MMM d, yyyy');

  const DateModal: React.FunctionComponent<any> = ({ isOpen, onClose }) => {
    return (
      <IonModal className="datemodal" isOpen={isOpen}>
        <IonContent className="dateModalOpen">
          <IonDatetime
            locale="en-GB"
           value={dateValue}
           id="datetime"
           onChange={() => dateChanged(formattedString)}
            showDefaultButtons={true}
            min="1920"
            max="2022"
            className="calendar"
            presentation="date"
          >
            <span slot="title">Date of Birth</span>
          </IonDatetime>
        </IonContent>
      </IonModal>
    );
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem onClick={() => setshowDate({ isOpen: true })}>
            <IonLabel>Date</IonLabel>
            <IonText slot="end">{dateValue}</IonText>
            {/* */}
          </IonItem>
          <p>Click above to open the modal</p>
        <DateModal
            isOpen={showDate.isOpen}
            onClose={() => setshowDate({ isOpen: false })}
          ></DateModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
