import { LightningElement, track } from 'lwc';
import { assignHandler, maximize } from 'lightningsnapin/minimized';

export default class EinsteinBot_NelBot_Minimized extends LightningElement {
    message = "medasculo";

    /**
     * Handler for when the minimized container is clicked.
     */
    handleClick() {
        maximize();
    }
}