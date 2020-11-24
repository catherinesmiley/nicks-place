class MenutypesController < ApplicationController
  before_action :set_menutype, only: [:show, :update, :destroy]

  # GET /menutypes
  def index
    @menutypes = Menutype.all

    render json: @menutypes
  end

  # GET /menutypes/1
  def show
    render json: @menutype
  end

  # POST /menutypes
  def create
    @menutype = Menutype.new(menutype_params)

    if @menutype.save
      render json: @menutype, status: :created, location: @menutype
    else
      render json: @menutype.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /menutypes/1
  def update
    if @menutype.update(menutype_params)
      render json: @menutype
    else
      render json: @menutype.errors, status: :unprocessable_entity
    end
  end

  # DELETE /menutypes/1
  def destroy
    @menutype.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menutype
      @menutype = Menutype.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menutype_params
      params.require(:menutype).permit(:title)
    end
end
