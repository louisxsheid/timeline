import { useState } from 'react';
import Modal from '../../../components/Modal/Modal';
import dayjs from 'dayjs';

const DataItem = (props) => {
    const { name, date } = props;
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
                {/* <div>Context: {context}</div> */}
                <div>Date: {dayjs(date).format("MM/DD/YYYY")}</div>
              </div>
            </Modal>
          )}
        </div>
    );
};

export default DataItem;