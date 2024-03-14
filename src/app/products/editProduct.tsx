import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
export default function EditProduct() {
  return (
    <Sheet>
      <SheetTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md ">Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
