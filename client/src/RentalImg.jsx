import Image from "./Image.jsx";

export default function RentalImg({rental,index=0,className=null}) {
  if (!rental.photos?.length) {
    return '';
  }
  if (!className) {
    className = 'object-cover';
  }
  return (
    <Image className={className} src={rental.photos[index]} alt=""/>
  );
}