import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Item } from '@/db';

const ItemCard = ({ item }: { item: Item }) => {
  return (
    <Card className='m-2 w-[20rem] h-[22rem]'>
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
        {item.rating && <CardDescription>{item.rating}</CardDescription>}
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent>
        <div>{item.type}</div>
        <p>{item.details}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
