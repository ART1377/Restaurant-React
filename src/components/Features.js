import React from 'react';
import Feature from './Feature';
import SectionTitle from './SectionTitle';
import {
  TbTruckDelivery,
  TbBuildingStore,
  TbCreditCard,
  TbBox,
} from 'react-icons/tb';

const Features = () => {
  return (
    <>
      <SectionTitle title={'چرا لبخند ؟'} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <Feature title={'بسته بندی مناسب'} icon={<TbBox />} />
          </div>
          <div className="col-sm-6 col-lg-3">
            <Feature title={'ارسال سریع'} icon={<TbTruckDelivery />} />
          </div>
          <div className="col-sm-6 col-lg-3">
            <Feature title={'پرداخت آسان '} icon={<TbCreditCard />} />
          </div>
          <div className="col-sm-6 col-lg-3">
            <Feature title={'پرداخت در محل'} icon={<TbBuildingStore />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
