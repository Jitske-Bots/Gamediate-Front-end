import { WishlistItem } from "../Models/wishlistItem";

export class WishlistData {

    public getMockData() : WishlistItem[] {
        const WishlistItems : WishlistItem[] = [
            { id : 1, accountID: 1, gameID: 1 },
            { id: 2, accountID: 1, gameID: 2 }
          ];
        return WishlistItems;
    }
}
