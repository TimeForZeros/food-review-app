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
  const arr = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];
  console.log(arr);
  return (
      <section className=' w-[100%] flex justify-center items-center'>
      <div className="flex flex-wrap m-2 border rounded-2xl shadow-md min-h-[20rem]">
        {arr.map((_, idx) => (
          <ItemCard key={idx} item={dummyItem} />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
