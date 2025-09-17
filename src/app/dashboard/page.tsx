import React from 'react';
import ItemCard from './item-card';
import { Item } from '@/db';

const dummyItem: Item = {
  type: 'drink',
  name: 'boba',
  rating: 'mid',
  id: 3,
};

const Dashboard = () => {
  const arr = ['a', 'b', 'c', 'd'];
  console.log(arr);
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="grid m-4 border-2 min-w-[90%] min-h-[90%] rounded-2xl">
        {arr.map((_, idx) => (
          <ItemCard key={idx} item={dummyItem} />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
