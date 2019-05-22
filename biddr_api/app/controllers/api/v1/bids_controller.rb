class Api::V1::BidsController < Api::ApplicationController
    before_action :authenticate_user!, only: [ :create ]
    def create
        
        bid.user = current_user
    
        bid.save!
        render json: { status:201, id: bid.id }
      end

    private


    def bid_params
        params.require(:bid).permit(:price)
    end
end
