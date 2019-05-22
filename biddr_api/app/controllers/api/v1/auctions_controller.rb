class Api::V1::AuctionsController < Api::ApplicationController
    before_action :authenticate_user!, only: [ :create ]
    before_action :find_auction, only: [ :show ]
    def index
        auctions = Auction.order(created_at: :desc)
    
        render(
          json: auctions,
          each_serializer: AuctionCollectionSerializer
        )
      end

    def show
        render(
          json: @auction,
          include: [ :seller, {bids: [ :buyer ]} ]
        )
        @current_price = Bid.last.price
    end

    def create
        auction = Auction.new auction_params
        auction.user = current_user
    
        auction.save!
        render json: { status:201, id: auction.id }
      end

      private
      def find_auction
        @auction ||= Auction.find params[:id]
      end
    
      def auction_params
        params.require(:auction).permit(:title, :description, :reserve_price, :end_date)
      end
end
