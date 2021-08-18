import { useState } from 'react';
import Modal from '../../../components/Modal/Modal';

const DataItem = (props) => {
    const { name, context, date } = props;
    const [open, setOpen] = useState(false);
    return (
        <div>
          <div className="showcase-item">
            <div>
              <div>{name}</div>
              <div>{date}</div>
            </div>
            <div className="edit-item" onClick={() => setOpen(true)}>✎</div>
          </div>
          {open && (
            <Modal setOpen={setOpen}>
              <div className="modal-info">
                <div>Name: {name}</div>
                <div>Context: {context}</div>
                <div>Date: {date}</div>
              </div>
            </Modal>
          )}
        </div>
    );
};

export default DataItem;